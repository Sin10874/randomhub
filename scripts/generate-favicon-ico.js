const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFaviconIco() {
  const publicDir = path.join(__dirname, '..', 'public');
  const sourcePath = path.join(publicDir, 'icon-source.png');
  const outputPath = path.join(publicDir, 'favicon.ico');
  
  console.log('正在从源图标生成 favicon.ico...');
  
  try {
    // 生成多个尺寸的PNG（用于ICO）
    const sizes = [16, 32];
    const pngBuffers = [];
    
    for (const size of sizes) {
      const buffer = await sharp(sourcePath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toBuffer();
      
      pngBuffers.push(buffer);
      console.log(`✓ 已生成 ${size}x${size} PNG缓冲区`);
    }
    
    // 将多个PNG转换为ICO格式
    const icoBuffer = await toIco(pngBuffers);
    
    // 保存favicon.ico
    fs.writeFileSync(outputPath, icoBuffer);
    console.log(`✓ 已生成 favicon.ico (包含 ${sizes.length} 个尺寸)`);
    
    // 同时更新app目录下的favicon.ico
    const appFaviconPath = path.join(__dirname, '..', 'app', 'favicon.ico');
    fs.writeFileSync(appFaviconPath, icoBuffer);
    console.log(`✓ 已更新 app/favicon.ico`);
    
    console.log('\n✅ favicon.ico 生成完成！');
  } catch (error) {
    console.error('❌ 生成失败:', error.message);
    process.exit(1);
  }
}

generateFaviconIco().catch(console.error);

