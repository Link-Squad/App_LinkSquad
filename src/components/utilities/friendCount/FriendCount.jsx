import useFetchWithLoading from '../../../hooks/useFetchWithLoading'
import { getFriends } from '../../../services/api.service'

const FriendCount = ({userId}) => {
    const {data, loading} = useFetchWithLoading(getFriends, userId)

    return loading ? '...' : data.length
}

export default FriendCount