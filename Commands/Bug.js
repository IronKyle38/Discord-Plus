module.exports = {
    name: 'Bug',
    description: "Send URL of BUG report form",
    execute(message){
        console.log("Command !bug use.")
        message.author.send(
            "Bonjour,"+
            "\nSi tu as découvert un bug ou si tu souhaites m'envoyer une suggestion n'hésites pas !"+
            "\nRemplis juste ce formulaire : https://forms.gle/Qo5daMfhW7EUPQck9"+
            "\nMerci pour ton aide. :heart:"
        )
        .catch(() => {
            message.reply(
                "je ne peux pas t'envoyer de messages privés. 😢"+
                "\nMerci de vérifier tes paramètres de confidentialités afin d'autoriser les messages privés en provenance des membres du serveur. ✉️"
            )
            console.log("Can't send private messages to user.")
        })
    }
}