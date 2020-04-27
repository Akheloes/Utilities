var inside_o = Object.create(null);
inside_o['clef'] = 'valeur';
var inside_oo = Object.create(null);
inside_oo['clef'] = 'valeur';


var o = {
    clef: 'valeur',
    clefObjet: {},
    clefObjectNull: {
        xx: inside_o
    }
};

var oo = {
    clef: 'valeur',
    clefObjet: {},
    clefObjectNull: {
        xx: inside_oo
    }
};

function traverse_rectify (obj) {
    for (var key in obj) {
        if (obj[key] !== null && typeof(obj[key])=="object") {
            if(obj[key].constructor === undefined) {
                obj[key] = Object.assign({}, obj[key]);
            }
            traverse_rectify(obj[key]);
        }
    }
}

function traverse_display (obj) {
    for (var key in obj) {
        if (obj[key] !== null && typeof(obj[key])=="object") {
            console.log(obj[key].constructor);
            traverse_display(obj[key]);
        }
    }
}

traverse_rectify(o);

console.log('_____________oo_____________');
console.log(oo);
console.log('______________o_____________');
console.log(o);
console.log('_____________oo_____________');
traverse_display(oo);
console.log('______________o_____________');
traverse_display(o);
