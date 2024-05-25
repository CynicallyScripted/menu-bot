const TelegramBot = require('node-telegram-bot-api');
const token = '7187172093:AAEQ5c6qiZ99g8X6SBCbY8JNhEcgRHQ93FE';  // Replace with your bot's API token
const bot = new TelegramBot(token, { polling: true });

// Start command handler
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
        const options = {
                reply_markup: {
                            inline_keyboard: [
                                            [{ text: 'Choose Product', callback_data: 'choose_product' }]
                                                        ]
                                                                }
                                                                    };
                                                                        bot.sendMessage(chatId, 'Welcome! Please choose an option:', options);
                                                                        });

                                                                        // Callback query handler
                                                                        bot.on('callback_query', (callbackQuery) => {
                                                                            const message = callbackQuery.message;
                                                                                const data = callbackQuery.data;

                                                                                    if (data === 'choose_product') {
                                                                                            showProducts(message);
                                                                                                } else if (data.startsWith('product_')) {
                                                                                                        const productId = data.split('_')[1];
                                                                                                                showColors(message, productId);
                                                                                                                    } else if (data.startsWith('color_')) {
                                                                                                                            const colorId = data.split('_')[1];
                                                                                                                                    bot.sendMessage(message.chat.id, `Product and color selected: ${colorId}`);
                                                                                                                                        }
                                                                                                                                        });

                                                                                                                                        // Show products function
                                                                                                                                        function showProducts(message) {
                                                                                                                                            const options = {
                                                                                                                                                    reply_markup: {
                                                                                                                                                                inline_keyboard: [
                                                                                                                                                                                [{ text: 'Product 1', callback_data: 'product_1' }],
                                                                                                                                                                                                [{ text: 'Product 2', callback_data: 'product_2' }],
                                                                                                                                                                                                            ]
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                        };
                                                                                                                                                                                                                            bot.sendMessage(message.chat.id, 'Choose a product:', options);
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            // Show colors function
                                                                                                                                                                                                                            function showColors(message, productId) {
                                                                                                                                                                                                                                const options = {
                                                                                                                                                                                                                                        reply_markup: {
                                                                                                                                                                                                                                                    inline_keyboard: [
                                                                                                                                                                                                                                                                    [{ text: 'Red', callback_data: `color_red_${productId}` }],
                                                                                                                                                                                                                                                                                    [{ text: 'Blue', callback_data: `color_blue_${productId}` }],
                                                                                                                                                                                                                                                                                                ]
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                            };
                                                                                                                                                                                                                                                                                                                bot.sendMessage(message.chat.id, 'Choose a color:', options);
                                                                                                                                                                                                                                                                                                                }