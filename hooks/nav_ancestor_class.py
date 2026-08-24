"""Ajoute une classe CSS au <body>, ex. "ancestor-web-1", indiquant la section
racine de navigation (premier niveau du `nav` dans mkdocs.yml) à laquelle
appartient la page — y compris pour les pages imbriquées dans des sous-menus.

Permet de cibler en CSS/JS tout le contenu d'une section (Web 1, Web 2,
Illustration numérique, etc.) peu importe sa profondeur dans le nav.
"""

import re
import unicodedata

from bs4 import BeautifulSoup

_ancestor_by_src_uri: dict[str, str] = {}


def _slugify(title: str) -> str:
    normalized = unicodedata.normalize("NFKD", title)
    without_accents = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-z0-9]+", "-", without_accents.lower())
    return slug.strip("-")


def _iter_pages(item):
    if item.is_page:
        yield item
    elif item.is_section:
        for child in item.children:
            yield from _iter_pages(child)


def on_nav(nav, config, files):
    _ancestor_by_src_uri.clear()
    for item in nav.items:
        if not item.is_section:
            continue
        slug = _slugify(item.title)
        for page in _iter_pages(item):
            _ancestor_by_src_uri[page.file.src_uri] = slug
    return nav


def on_post_page(output, page, config):
    ancestor = _ancestor_by_src_uri.get(page.file.src_uri)
    if not ancestor:
        return output

    soup = BeautifulSoup(output, "html.parser")
    body = soup.find("body")
    if body is None:
        return output

    classes = body.get("class", [])
    classes.append(f"ancestor-{ancestor}")
    body["class"] = classes

    return str(soup)
