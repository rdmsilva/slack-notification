const { Plugin } = require('release-it');

class SlackNotification extends Plugin {
    afterRelease() {
        console.log("**** after Release ****")
        console(`Name ${this.getName()}`)
    }
}

module.exports = SlackNotification;