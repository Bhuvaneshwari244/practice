/// <reference types="https://deno.land/x/types/index.d.ts" />

declare namespace Deno {
  export const env: {
    get(key: string): string | undefined;
  };
  export function serve(handler: (req: Request) => Response | Promise<Response>): void;
}
