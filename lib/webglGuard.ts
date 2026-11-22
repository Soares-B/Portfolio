type GL = WebGLRenderingContext | WebGL2RenderingContext;

const w: any = typeof window !== 'undefined' ? window : null;
const contexts: Set<GL> = w ? (w.__glContexts ??= new Set<GL>()) : new Set<GL>();

export function installWebGLGuard() {
  if (!w || w.__glGuard) return;
  w.__glGuard = true;

  const orig = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type: string, ...args: any[]) {
    const ctx = orig.call(this, type, ...args);
    if (ctx && type.startsWith('webgl')) contexts.add(ctx as GL);
    return ctx;
  } as any;
}

export function releaseWithin(root: Element | null, keep = '[data-gl-keep]') {
  contexts.forEach(gl => {
    const canvas = gl.canvas as HTMLCanvasElement;

    if (gl.isContextLost()) {
      contexts.delete(gl);
      return;
    }
    if (canvas.closest(keep)) return;

    const orphan = !canvas.isConnected;
    const inside = !!root && root.contains(canvas);

    if (orphan || inside) {
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      contexts.delete(gl);
    }
  });
  console.log('[gl] contextos vivos:', contexts.size);
}