'use client'

// import { redirect } from 'next/navigation'
import { useState } from 'react'
import { useToastStore } from '@/components/Toast/store'
import FalseReviewDuck from '@/public/svgs/duck/falseReviewDuck.svg'
import ReviewDuck from '@/public/svgs/duck/reviewDuck.svg'
// import { useLocalCategoryStore } from '../main/store'

export default function ReviewForm() {
  const [inputCount, setInputCount] = useState(0)
  const [rating, setRating] = useState(0)
  const { showToast } = useToastStore()
  // const { categoryName } = useLocalCategoryStore()

  async function registrationReview(formData: FormData) {
    if (rating === 0) {
      showToast('점수를 입력해주세요.')
      return
    }
    if (!formData.get('content')) {
      showToast('리뷰를 입력해주세요.')
      return
    }

    console.log(formData.get('content'))

    // const data = await postReview()

    // if (data.status === 200) {
    //   showToast('상품이 등록되었습니다.')
    //   redirect(`/${categoryName}`)
    // }

    // showToast('리뷰 등록에 실패했습니다.')
    // redirect(`/${categoryName}`)
  }

  return (
    <form action={registrationReview} className="px-[20px]">
      <h2 className="mt-[25px] text-[20px]">판매자 님의 매너덕 점수는?</h2>
      <div className="mt-[15px] grid grid-cols-5">
        {[...Array(rating)].map((a, i) => (
          <button
            type="button"
            className="place-self-center"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            onClick={() => setRating(i + 1)}
          >
            <span className="hidden">true</span>
            <ReviewDuck />
          </button>
        ))}
        {[...Array(5 - rating)].map((a, i) => (
          <button
            type="button"
            className="place-self-center"
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            onClick={() => setRating(rating + i + 1)}
          >
            <span className="hidden">false</span>
            <FalseReviewDuck />
          </button>
        ))}
      </div>
      <h2 className="mt-[40px] text-[20px]">판매자님에게 리뷰를 남겨주세요!</h2>
      <textarea
        className="w-full mt-[20px] h-[15rem] rounded-2xl border-solid border-neutral-200 border focus:outline-none text-[17px] pt-[10px] px-[10px]"
        maxLength={100}
        onChange={(e) => setInputCount(e.target.value.length)}
        name="content"
      />
      <p className="flex justify-end pr-[3px] text-neutral-500">
        {inputCount} / 100
      </p>
      <button
        type="submit"
        className="w-full h-[60px] bg-sky-600 text-white text-[20px] rounded-full mt-[50px]"
      >
        등록하기
      </button>
    </form>
  )
}