class Solution(object):
    def topKFrequent(self, nums, k):
        freq_map = Counter(nums)  # O(n)
        # Use a min-heap of size k
        heap = []
        for num, freq in freq_map.items():
            heapq.heappush(heap, (freq, num))
            if len(heap) > k:
                heapq.heappop(heap)

        return [num for freq, num in heap]