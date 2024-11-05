import { useCallback, useEffect, useRef } from "react";

export function useFallbackImageInSSR(fallbackSrc = '/img/common/not_found.svg') {
    const ref = useRef(null)

    /**
     * Error happened / catched after hydration
     */
    const onError = useCallback(
        (e: any) => { e.target.src = fallbackSrc }, [fallbackSrc],
    )

    /**
     * Error happened before hydration, but catched after hydration
     */
    useEffect(() => {
        if (ref && ref.current) {
            const { complete, naturalHeight } = ref.current
            const errorLoadingImgBeforeHydration = complete && naturalHeight === 0

            if (errorLoadingImgBeforeHydration) {
                (ref.current as any).src = fallbackSrc
            }
        }
    }, [fallbackSrc])

    return {
        ref,
        onError,
    }
}