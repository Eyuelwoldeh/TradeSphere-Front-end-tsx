import axiosInstance from "../axiosConfig";

export const getMessagesForChat = async (senderUid: string, receiverUid: string) => {
    try {
        const response = await axiosInstance.get(`/messages/${senderUid}/${receiverUid}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching messages:", error);
        return [];
    }
};

export const getChatUsers = async (uid: string) => {
    try {
        const response = await axiosInstance.get(`/messages/chat-users/${uid}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching chat users:", error);
        return [];
    }
};

export const sendMessage = async (senderUid: string, receiverUid: string, content: string) => {
    try {
        const response = await axiosInstance.post("/messages", { senderUid, receiverUid, content });
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error;
    }
};