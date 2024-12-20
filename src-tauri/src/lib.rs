use rand::{thread_rng, Rng};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn dynamic() -> char {
    let mut rng = thread_rng();
    rng.gen_range(b'a'..=b'z') as char
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, dynamic])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
