'use client'

import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import LikeItem from '@/containers/mypage/like/LikeItem'
import { useLikeStore } from '@/containers/mypage/store'
import { GoodsData } from '@/types/aggregationApiDataType'
import { getLikeGoods } from '@/utils/goodsApiActions'

export default function LikeList() {
  const { page, setPage } = useLikeStore()
  const [data, setData] = useState<GoodsData>({
    totalCount: 0,
    nowPage: 0,
    maxPage: 0,
    isLast: false,
    goodsList: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getLikeGoods(page)
      if (res.status === 200) {
        setData(res.result)
      }
    }

    fetchData()
  }, [page])

  if (!data.goodsList) {
    return (
      <div className="text-slate-500 text-center my-2">
        좋아요 한 상품이 없습니다.
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5 justify-center items-center">
        {data.goodsList.map((goods) => (
          <LikeItem key={goods.goodsCode} goodsCode={goods.goodsCode} />
        ))}
      </div>
      <Pagination
        currentPage={data.nowPage}
        setCurrentPage={setPage}
        maxPage={data.maxPage}
      />
    </>
  )
}