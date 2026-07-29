"""Wrap CodePen embed <p class="... codepen ..."> tags in a <div> with the same classes.

Codepen's embed snippet is a lone <p class="codepen" ...> block. mkdocs-material
needs a wrapping element (matching the pen's classes) to style/size the embed
(e.g. aspect-ratio helpers), so this hook adds it automatically before markdown
is parsed.
"""

import re

CODEPEN_P_RE = re.compile(
    r'<p\b(?:[^>]*\bclass="(?P<cls>[^"]*\bcodepen\b[^"]*)"[^>]*)>.*?</p>',
    re.DOTALL,
)


def on_page_markdown(markdown, page, config, files):
    def wrap(match):
        return f'<div class="{match.group("cls")}">\n{match.group(0)}\n</div>'

    return CODEPEN_P_RE.sub(wrap, markdown)
