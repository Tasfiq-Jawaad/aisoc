import React from "react";
import sanitizeHtml from "sanitize-html";

import { CodeBlock } from "@/components/blog/CodeBlock";
import { Divider } from "@/components/blog/Divider";
import { List } from "@/components/blog/List";
import { OSCard } from "@/components/blog/OSCard";
import { OSStack } from "@/components/blog/OSStack";
import { Section } from "@/components/blog/Section";
import { SubSection } from "@/components/blog/SubSection";

const ComponentMap: Record<string, React.ElementType> = {
  Section,
  SubSection,
  OSCard,
  OSStack,
  CodeBlock,
  Divider,
  List,
};

// Types for the JSONB payload
export type Block = {
  type: string;
  props?: Record<string, unknown>;
  children?: Block[];
  content?: string;
};

// Centralised sanitisation configuration
const sanitizeOptions = {
  allowedTags: ["b", "i", "em", "strong", "a", "code", "br"],
  allowedAttributes: {
    a: ["href", "target", "rel"],
  },
};

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return blocks.map((block, index) => {
    if (block.type === "Paragraph") {
      const cleanHtml = sanitizeHtml(block.content || "", sanitizeOptions);
      return (
        <p
          key={index}
          className="mt-3"
          dangerouslySetInnerHTML={{ __html: cleanHtml }}
        />
      );
    }

    if (block.type === "List" && Array.isArray(block.props?.items)) {
      // Explicitly tell TypeScript this is an array of strings
      const listItems = block.props.items as string[];

      const itemsNodes = listItems.map((rawHtml: string, i: number) => {
        const cleanHtml = sanitizeHtml(rawHtml, sanitizeOptions);
        return <span key={i} dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
      });
      return <List key={index} items={itemsNodes} />;
    }

    const Component = ComponentMap[block.type];

    if (!Component) {
      console.warn(`Unknown block type: ${block.type}`);
      return null;
    }

    return (
      <Component key={index} {...block.props}>
        {block.children ? (
          <BlockRenderer blocks={block.children} />
        ) : (
          block.content
        )}
      </Component>
    );
  });
}
