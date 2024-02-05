import { useState, useEffect } from "react";
import {
  createEncryptedConnection,
  createUnencryptedConnection,
} from "./Encrypt";

export default function ChatRoom({
  roomId,
  isEncrypted,
}: {
  roomId: string;
  isEncrypted: boolean;
}) {
  useEffect(() => {
    const createConnection = isEncrypted
      ? createEncryptedConnection
      : createUnencryptedConnection;
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, isEncrypted]);

  return <h1>Welcome to the {roomId} room!</h1>;
}
