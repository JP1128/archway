import { createAvatar, Result } from "@dicebear/core";
import { notionistsNeutral } from "@dicebear/collection";

const DEFAULT_STYLE = notionistsNeutral;
const DEFAULT_SIZE = 256;

export default function createUserAvatar(seed: string): Result {
  return createAvatar(DEFAULT_STYLE, {
    seed: seed,
    size: DEFAULT_SIZE,
  });
}
