/**
 * Remark plugin that wraps <iframe> elements in a responsive container
 * and adds lazy loading. Designed for WordPress-era YouTube embeds.
 *
 * In the remark (MDAST) tree, raw HTML blocks are `html` type nodes.
 */
import { visit } from 'unist-util-visit';

export default function remarkResponsiveIframes() {
  return (tree) => {
    visit(tree, 'html', (node) => {
      if (!node.value || !node.value.includes('<iframe')) return;

      let html = node.value;

      // Add loading="lazy" if not already present
      html = html.replace(/<iframe(?![^>]*loading=)/g, '<iframe loading="lazy"');

      // Remove fixed width/height and frameborder attributes (CSS handles sizing)
      html = html.replace(/\s*width="\d+"/g, '');
      html = html.replace(/\s*height="\d+"/g, '');
      html = html.replace(/\s*frameborder="\d+"/g, '');

      // Wrap in responsive container
      html = `<div class="responsive-iframe">\n${html}\n</div>`;

      node.value = html;
    });
  };
}
