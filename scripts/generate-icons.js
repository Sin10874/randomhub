const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const svgPath = path.join(__dirname, '..', 'public', 'icon.svg');
  const publicDir = path.join(__dirname, '..', 'public');
  
  // 确保public目录存在
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 读取SVG文件
  const svgBuffer = fs.readFileSync(svgPath);

  // 需要生成的图标尺寸
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 },
  ];

  console.log('开始生成图标文件...');

  // 生成各个尺寸的PNG文件
  for (const { name, size } of sizes) {
    try {
      await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 140, b: 0, alpha: 0 } // 透明背景
        })
        .png()
        .toFile(path.join(publicDir, name));
      
      console.log(`✓ 已生成: ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`✗ 生成 ${name} 失败:`, error.message);
    }
  }

  // 生成favicon.ico（包含多个尺寸）
  try {
    const favicon16 = await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    const favicon32 = await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    const favicon48 = await sharp(svgBuffer)
      .resize(48, 48)
      .png()
      .toBuffer();

    // 注意：sharp不能直接创建.ico文件，所以我们创建一个favicon.png作为替代
    // 或者使用其他工具如jimp-convert或在线工具
    // 这里我们先创建favicon.png
    await sharp(favicon32)
      .png()
      .toFile(path.join(publicDir, 'favicon.png'));
    
    console.log('✓ 已生成: favicon.png (32x32)');
    console.log('注意: favicon.ico需要使用专门的工具生成，推荐使用 https://realfavicongenerator.net/');
  } catch (error) {
    console.error('✗ 生成favicon失败:', error.message);
  }

  console.log('\n图标生成完成！');
}

generateIcons().catch(console.error);

