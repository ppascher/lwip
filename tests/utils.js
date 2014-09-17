module.exports = {
    generateRandomBatch: generateRandomBatch
};

function generateRandomBatch(batch, n) {
    var ops = [];
    for (var i = 0; i < n; i++) {
        var r = Math.floor(Math.random() * 12);
        switch (r) {
            case 0:
                var sd = Math.floor(Math.random() * 20);
                batch = batch.blur(sd);
                ops.push('blr' + sd);
                break;
            case 1:
                var a = Math.floor(Math.random() * 360);
                batch = batch.rotate(a);
                ops.push('rtt' + a);
                break;
            case 2:
                var w = Math.floor(Math.random() * 1000) + 10;
                var h = Math.floor(Math.random() * 1000) + 10;
                batch = batch.resize(w, h);
                ops.push('rsz' + w + 'X' + h);
                break;
            case 3:
                var w = Math.floor(Math.random() * 1000) + 10;
                var h = Math.floor(Math.random() * 1000) + 10;
                batch = batch.crop(w, h);
                ops.push('crp' + w + 'X' + h);
                break;
            case 4:
                var wr = Math.random() * 1 + 0.1;
                var hr = Math.random() * 1 + 0.1;
                batch = batch.scale(wr, hr);
                ops.push('scl' + wr.toFixed(2) + 'X' + hr.toFixed(2));
                break;
            case 5:
                var i = Math.floor(Math.random() * 3);
                var axes = ['x', 'y', 'xy'][i];
                batch = batch.mirror(axes);
                ops.push('mrr' + axes);
                break;
            case 6:
                var b = Math.floor(Math.random() * 30);
                batch = batch.border(b);
                ops.push('brdr' + b);
                break;
            case 7:
                var amp = Math.floor(Math.random() * 300);
                batch = batch.sharpen(amp);
                ops.push('shrp' + amp);
                break;
            case 8:
                var d = Math.random() * 2;
                batch = batch.saturate(d);
                ops.push('sat' + d.toFixed(2));
                break;
            case 9:
                var d = Math.random() * 2;
                batch = batch.lighten(d);
                ops.push('lit' + d.toFixed(2));
                break;
            case 10:
                var d = Math.random() * 0.5;
                batch = batch.darken(d);
                ops.push('drk' + d.toFixed(2));
                break;
            case 11:
                var s = Math.floor(Math.random() * 360);
                batch = batch.hue(s);
                ops.push('hue' + s);
                break;
        }
    }
    return ops;
}
