export class Cursor {
  id: string;
  color: string;
  html: CursorPos;
  css: CursorPos;
  js: CursorPos;
}

export class CursorPos {
  lineNumber: number;
  column: number;
}
