function solve(path) {
    let fileStartIdx = path.lastIndexOf('\\') + 1;
    let extStartIdx = path.lastIndexOf('.') + 1;
    
    let fileName = path.substring(fileStartIdx, extStartIdx - 1);
    let extName = path.substring(extStartIdx);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extName}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
/*
File name: Template
File extension: pptx
*/

solve('C:\\Projects\\Data-Structures\\LinkedList.cs');
/*
File name: LinkedList
File extension: cs
*/

solve('C:\\Projects\\Data-Structures\\template.bak.pptx');
/*
File name: template.bak
File extension: pptx
*/
