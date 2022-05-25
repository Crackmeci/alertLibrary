
class UIAlert {
    constructor({ type, text, placeName, delayTime }) {
        this.placeName = document.querySelector(placeName);
        this.text = text;
        this.delayTime = delayTime;
        this.type = type;
        this.root = document.querySelector(":root");
        this.create();
    }

    hideAlert = (element) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.classList.add("hidden");
            element.remove();
        }, 1000);
    };

    create() {
        document.createElement("div");
        let alert = document.createElement("div");
        let alertType = "alert-" + this.type;
        alert.classList.add("alert", alertType);
        this.root.style.setProperty("--transitionTime", this.delayTime+ "s");

        let alertText = document.createElement("p");
        alertText.classList.add("alert-text");
        alertText.innerHTML = this.text;

        alert.appendChild(alertText);

        let closeSide = document.createElement("div");
        closeSide.classList.add("close-side");

        let closeButton = document.createElement("button");
        closeButton.classList.add("alert-close");
        closeButton.onclick = () => {
            this.hideAlert(alert);
        };

        closeSide.appendChild(closeButton);
        alert.appendChild(closeSide);
        this.placeName.appendChild(alert);
        setTimeout(() => {
            alert.style.opacity = 0;
            setTimeout(() => {
                alert.remove();
            }, 1000);
        }, (parseInt(this.delayTime) - 0.5) * 1000);
  }
}
