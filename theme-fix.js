const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (dirFile.endsWith('.tsx') && !dirFile.includes('contact\\\\page.tsx')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
};

const appDir = path.join(process.cwd(), 'app');
const componentsDir = path.join(process.cwd(), 'components');

const files = [...walkSync(appDir), ...walkSync(componentsDir)];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/#0A0A0F/gi, 'var(--bg)');
  content = content.replace(/#111118/gi, 'var(--bg-surface1)');
  content = content.replace(/#18181F/gi, 'var(--bg-surface2)');
  
  content = content.replace(/#F8F8FC/gi, 'var(--text-primary)');
  content = content.replace(/#9898A8/gi, 'var(--text-secondary)');
  content = content.replace(/#5A5A6E/gi, 'var(--text-tertiary)');

  content = content.replace(/rgba\(255,255,255,0\.08\)/gi, 'var(--border)');
  content = content.replace(/rgba\(255,255,255,0\.10\)/gi, 'var(--border-accent)');
  content = content.replace(/rgba\(255,255,255,0\.06\)/gi, 'var(--border)');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
console.log('Done fixing theme strings');
