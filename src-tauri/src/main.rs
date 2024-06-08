// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command




fn main() {

    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_webview_window("main").unwrap();
            main_window.emit("app", "ready").unwrap();
            Ok(())
        })
    
        .run(tauri::generate_context!())
        .expect("Something went wrong while running tauri");
}


use tauri::Manager;
