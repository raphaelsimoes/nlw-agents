import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { CreateRoomsRequest } from './types/create-room-request'
import type { CreateRoomsResponse } from './types/create-room-response'

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ name, description }: CreateRoomsRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
        }),
      })

      const result: CreateRoomsResponse = await response.json()

      return result
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-rooms'],
      })
    },
  })
}
