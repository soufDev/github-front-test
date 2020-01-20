import { IOrgApi } from '../../types/organization';
export const formatOrganiation = (data: IOrgApi) => {
    return {
        id: data.node_id,
        avatar: data.avatar_url,
        description: data.description
    }
}