const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file === 'page.tsx' || file === 'not-found.tsx') {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Remove imports
            content = content.replace(/import\s*\{\s*Header\s*\}\s*from\s*['"]@\/components\/layout\/Header['"];?\n?/g, '');
            content = content.replace(/import\s*\{\s*Footer\s*\}\s*from\s*['"]@\/components\/layout\/Footer['"];?\n?/g, '');
            content = content.replace(/import\s*\{\s*ScrollProgressBar\s*\}\s*from\s*['"]@\/components\/ui\/ScrollProgressBar['"];?\n?/g, '');
            
            // Remove components
            content = content.replace(/\s*<ScrollProgressBar\s*\/>/g, '');
            content = content.replace(/\s*<Header\s*\/>/g, '');
            content = content.replace(/\s*<Footer\s*\/>/g, '');
            
            fs.writeFileSync(fullPath, content);
            console.log('Processed', fullPath);
        }
    }
}

processDir(path.join(process.cwd(), 'app'));
