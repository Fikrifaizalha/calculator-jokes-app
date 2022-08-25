import { run } from "./component/app";
import "./style/main.scss";
import { AlertService } from "./component/alert.service";
import { ComponentService } from "./component/component.service";
import webpack from "../assets/webpack.svg";
import getData from "./data/get.data";
import "./component/footer";

const webpackImg = document.getElementById("webpackImg");
webpackImg.src = webpack;

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", getData);
