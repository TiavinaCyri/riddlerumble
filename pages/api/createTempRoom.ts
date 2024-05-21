import e, { createClient } from '@/dbschema/edgeql-js';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method != 'POST') {
        res.status(405).json({ success: false, error: "Method not allowed" })
        return
    }

    try {
        const client = createClient({
            instanceName: process.env.EDGEDB_INSTANCE,
            secretKey: process.env.EDGEDB_SECRET_KEY,
        })

        const { latitude, longitude, time, id_room, id_user } = req.body

        const insertQuery = e.insert(e.Temp_room, {
            latitude: e.float32(latitude),
            longitude: e.float32(longitude),
            time: e.str(time),
            id_user: e.select(e.Users, (user) => ({
                filter_single: { id: e.uuid(id_user) }
            })),
            id_room: e.select(e.Room, (room) => ({
                filter_single: { id: e.uuid(id_room) }
            })),
        });

        const result = await insertQuery.run(client);
        res.status(200).json({ success: true, temp_room: result })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
}