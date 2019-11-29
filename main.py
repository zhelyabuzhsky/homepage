from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/algorithms")
def algorithms():
    return render_template("algorithms/algorithms.html")


@app.route("/algorithms/bubble_sort")
def algorithms_bubble_sort():
    return render_template("algorithms/bubble_sort.html")


@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)
