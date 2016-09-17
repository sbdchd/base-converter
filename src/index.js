/* globals document */

document.addEventListener('DOMContentLoaded', () => {

    const to_binary = n => n.toString(2);
    const to_decimal = n => n.toString(10);
    const to_hex = n => n.toString(16).toUpperCase();
    const to_octal = n => n.toString(8);

    const valid = z => {
        if (isNaN(z)) {
            return '';
        }
        return z;
    };

    const binary = document.getElementById('binary');
    const decimal = document.getElementById('decimal');
    const hex = document.getElementById('hex');
    const octal = document.getElementById('octal');

    hex.oninput = e => {
        const v = valid(parseInt(e.target.value, 16));
        binary.value = to_binary(v);
        decimal.value = to_decimal(v);
        octal.value = to_octal(v);
    };

    binary.oninput = e => {
        const v = valid(parseInt(e.target.value, 2));
        decimal.value = to_decimal(v);
        hex.value = to_hex(v);
        octal.value = to_octal(v);
    };

    octal.oninput = e => {
        const v = valid(parseInt(e.target.value, 8));
        binary.value = to_binary(v);
        decimal.value = to_decimal(v);
        hex.value = to_hex(v);
    };

    decimal.oninput = e => {
        const v = valid(parseFloat(e.target.value));
        binary.value = to_binary(v);
        hex.value = to_hex(v);
        octal.value = to_octal(v);
    };

});
