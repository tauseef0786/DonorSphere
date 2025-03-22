import ChatMessage from './models/ChatMessage.js';

export const setupWebSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('Client connected');

    // Join campaign room
    socket.on('join-campaign', (campaignId) => {
      socket.join(`campaign:${campaignId}`);
    });

    // Join private chat room
    socket.on('join-chat', (userId) => {
      socket.join(`chat:${userId}`);
    });

    // Handle new comments
    socket.on('new-comment', async (data) => {
      io.to(`campaign:${data.campaignId}`).emit('comment-received', data);
    });

    // Handle new donations
    socket.on('new-donation', async (data) => {
      io.to(`campaign:${data.campaignId}`).emit('donation-received', data);
    });

    // Handle private messages
    socket.on('private-message', async (data) => {
      const message = new ChatMessage({
        sender: data.senderId,
        receiver: data.receiverId,
        content: data.content
      });
      await message.save();
      io.to(`chat:${data.receiverId}`).emit('message-received', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};