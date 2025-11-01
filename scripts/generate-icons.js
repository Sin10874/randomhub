const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const sourcePath = path.join(__dirname, '..', 'public', 'icon-source.png');
  const publicDir = path.join(__dirname, '..', 'public');
  
  // 检查源文件是否存在
  if (!fs.existsSync(sourcePath)) {
    console.error('错误: 找不到源图标文件 icon-source.png');
    return;
  }

  // 需要生成的图标尺寸
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  console.log('开始从源图片生成图标文件...');

  // 生成各个尺寸的PNG文件
  for (const { name, size } of sizes) {
    try {
      await sharp(sourcePath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // 透明背景
        })
        .png()
        .toFile(path.join(publicDir, name));
      
      console.log(`✓ 已生成: ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`✗ 生成 ${name} 失败:`, error.message);
    }
  }

  // 生成favicon.png
  try {
    await sharp(sourcePath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.png'));
    
    console.log('✓ 已生成: favicon.png (32x32)');
    console.log('注意: favicon.ico需要使用专门的工具生成，推荐使用 https://realfavicongenerator.net/');
  } catch (error) {
    console.error('✗ 生成favicon失败:', error.message);
  }

  // 复制源文件作为主图标（如果尺寸合适）
  try {
    const metadata = await sharp(sourcePath).metadata();
    if (metadata.width >= 512) {
      await sharp(sourcePath)
        .resize(512, 512, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(publicDir, 'icon.png'));
      console.log('✓ 已创建: icon.png (512x512)');
    }
  } catch (error) {
    console.error('✗ 创建icon.png失败:', error.message);
  }

  console.log('\n图标生成完成！');
}

generateIcons().catch(console.error);
