"""Ajoute une icône SVG et les attributs cible/rel aux liens externes ou vers des
fichiers téléchargeables.

Remplace la logique équivalente qui tournait en JavaScript (extra.js) à chaque
navigation "instant" de mkdocs-material (via un MutationObserver) : ici c'est
fait une seule fois au build, directement dans le HTML de chaque page.
"""

from urllib.parse import urlparse

from bs4 import BeautifulSoup

FILE_EXTENSIONS = (
    # Fichiers de compression
    ".zip", ".rar", ".7z", ".tar", ".gz", ".bz2",
    # Documents
    ".pdf", ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx",
    ".txt", ".rtf", ".odt", ".ods", ".odp",
    # Images
    ".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".svg", ".webp",
    # Vidéos
    ".mp4", ".avi", ".mov", ".wmv", ".flv", ".mkv", ".webm",
)

SKIPPED_HREF_PREFIXES = ("javascript:", "#", "mailto:", "tel:")

EXT_LINK_ICON = (
    '<svg class="ext-link-icon" style="vertical-align: middle; display: inline-block;" '
    'width="16px" height="16px" viewBox="0 0 24 24" fill="none" '
    'xmlns="http://www.w3.org/2000/svg"><g id="Interface / External_Link">'
    '<path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 '
    '5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 '
    '5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 '
    '8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 '
    '18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" '
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
)


def on_page_content(html, page, config, files):
    site_netloc = urlparse(config.get("site_url") or "").netloc
    soup = BeautifulSoup(html, "html.parser")

    for link in soup.find_all("a", href=True):
        href = link["href"]

        if href.startswith(SKIPPED_HREF_PREFIXES):
            continue

        is_external = bool(urlparse(href).netloc) and urlparse(href).netloc != site_netloc
        has_file_extension = href.lower().endswith(FILE_EXTENSIONS)

        if not (is_external or has_file_extension):
            continue

        link["target"] = "_blank"
        link["rel"] = "noopener noreferrer"

        if has_file_extension:
            link["download"] = ""

        if is_external and not link.find("svg"):
            link.append(" ")
            link.append(BeautifulSoup(EXT_LINK_ICON, "html.parser").svg)

    return str(soup)
