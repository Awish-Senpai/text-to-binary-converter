module.exports = {
    convert: function (text) {
        if (!text) throw new TypeError('No value has been specified! Please specify some value.');
        else if (typeof text !== 'string') throw new TypeError('Value provided can only be String!');
        var BinaryText = text.split('');
        return BinaryText
            .map(function (characters) {
                return characters.charCodeAt(0).toString(2).padStart(8, 0)
            })
            .join(' ');
    }
}