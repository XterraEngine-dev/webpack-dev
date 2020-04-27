import { showAlert } from './messages';
import $ from 'jquery';
import "./styles.scss";
import uuid from 'uuid/v4'

document.getElementById('btn-alert')
    .addEventListener('click', showAlert);

$('#btn-jq').click(() => alert(uuid()))

