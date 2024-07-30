module.exports = {
    // telegram bot token and username, get from @BotFather
    token: '7455148975:AAGDidy26s96uZuoiTRwqI-tAbgZl7BXL6A',
    username: 'StickerToDownload_bot',

    // imagemagick convert path, defaults to 'convert'
    im_convert_path: 'convert',

    // max images allowed in one pack
    maximages: 200,
    // file storage path
    file_storage: './storage',

    // recognized sticker sources
    sticker_sources: [
        'https://t.me/addstickers/',
        'https://telegram.me/addstickers/'
    ],
    // use language
    default_lang: 'zh-hans',
    available_lang: {
        'en': ['English', 'English'],
        'de': ['German', 'Deutsch'],
        'zh-hans': ['简体中文', '中国'],
        'zh-hant': ['正體中文', '中國'],
        'pt': ['Português (Portugal)']
    }
};

