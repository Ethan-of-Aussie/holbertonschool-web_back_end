export default function cleanSet(set, startString){
    if (!startString){
        return '';
    }
    const res = [];
     for (const value of set){
        if (typeof value === 'string' && value.startsWith(startString)) {
            res.push(value.slice(startString.length));
        }
     }
     return res.join('-');
    }