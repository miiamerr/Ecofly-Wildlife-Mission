from flask import Flask, render_template

app = Flask(__name__, template_folder="templates", static_folder="static")


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/rules")
def rules():
    return render_template("rules.html")


@app.route("/mission-failed")
def mission_failed():
    return render_template("mission_failed.html")


if __name__ == "__main__":
    app.run(debug=True, port=5001)

