'use strict'

import { app, BrowserWindow } from 'electron'
const path = require('path')
const url = require('url')

app.on('ready', () => {
	let win = new BrowserWindow({
		width: 800,
		heigth: 600,
		autoHideMenuBar : true,
		show: false,
	})

	win.once('ready-to-show', () => {
		win.show()
	})
	

	win.loadURL(`file://${__dirname}//render//index.html`)
	win.toggleDevTools();

	win.on('closed', () => {
		win = null
		app.quit()
	})
})

app.on('before-quit', () => {
	console.log('Saliendo...')
})