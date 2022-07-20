const {SafeString} = require("handlebars")
module.exports = {
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
            }`;
    },
    format_text: (text) => {
        return new SafeString(text.replace(/\n/g, '<br>'));
    }
};
