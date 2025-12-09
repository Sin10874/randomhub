import type { Metadata } from 'next';
import PokemonGeneratorPanelOptimized from '@/app/components/PokemonGeneratorPanelOptimized';

export const metadata: Metadata = {
  title: 'Pokemon Performance Test | RandomHub',
  description: 'Test and compare Pokemon image loading performance with different quality settings',
};

export default function TestPokemonPerformancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Pokemon Performance Test
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            测试不同图片质量设置下的加载性能。查看控制台获取详细指标。
          </p>
        </div>
      </section>

      {/* Performance Testing Info */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-blue-900 mb-4">📊 如何使用性能测试:</h2>
            <div className="space-y-3 text-sm text-blue-800">
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold">1.</span>
                <span>选择不同的 <strong>Image Quality</strong> 设置 (HIGH/MEDIUM/LOW)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold">2.</span>
                <span>点击 <strong>Generate_Pokemon</strong> 按钮</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold">3.</span>
                <span>查看页面顶部的 <strong>Performance Metrics</strong> 横幅获取数据</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold">4.</span>
                <span>打开浏览器 <strong>DevTools Console</strong> (F12) 查看详细日志</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-mono font-bold">5.</span>
                <span>使用 <strong>Network</strong> 标签查看每张图片的实际大小和加载时间</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-bold text-green-900 mb-4">🎯 预期性能指标:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded border border-green-200">
                <div className="font-mono font-bold text-green-800 mb-2">HIGH Quality</div>
                <div className="text-green-700 space-y-1">
                  <div>• ~200KB per image</div>
                  <div>• 6 images = ~1.2MB</div>
                  <div>• Fast WiFi: 500-1000ms</div>
                  <div>• 4G: 1000-2000ms</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-green-200">
                <div className="font-mono font-bold text-green-800 mb-2">MEDIUM Quality</div>
                <div className="text-green-700 space-y-1">
                  <div>• ~50KB per image</div>
                  <div>• 6 images = ~300KB</div>
                  <div>• Fast WiFi: 200-400ms</div>
                  <div>• 4G: 400-800ms</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded border border-green-200">
                <div className="font-mono font-bold text-green-800 mb-2">LOW Quality</div>
                <div className="text-green-700 space-y-1">
                  <div>• ~5KB per image</div>
                  <div>• 6 images = ~30KB</div>
                  <div>• Fast WiFi: 50-150ms</div>
                  <div>• 4G: 100-300ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Component */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <PokemonGeneratorPanelOptimized />
      </section>

      {/* Optimization Recommendations */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-purple-900 mb-4">💡 优化建议:</h2>
            <div className="space-y-3 text-sm text-purple-800">
              <div className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <div>
                  <strong>预加载策略:</strong> 使用 Image.preload() 在后台预加载图片,等全部加载完成后再显示,避免逐个加载的闪烁
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <div>
                  <strong>渐进式加载:</strong> 先显示低质量占位图,然后逐步升级到高质量图片 (Progressive JPEG)
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <div>
                  <strong>图片格式:</strong> 考虑使用 WebP 格式 (比 PNG 小 30-50%),但 PokeAPI 只提供 PNG
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <div>
                  <strong>CDN 缓存:</strong> GitHub raw.githubusercontent.com 有全球 CDN,首次加载后会被浏览器缓存
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <div>
                  <strong>自动预生成:</strong> 如果加载时间 &lt; 500ms (HIGH quality + 快速网络),可以启用页面加载时自动生成
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
