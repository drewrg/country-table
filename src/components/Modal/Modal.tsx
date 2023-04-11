import React, { useCallback, useEffect, useMemo, useState } from 'react'
import OverlayModal from 'react-overlays/Modal'
import { ModalProps } from './types'
import './styles.scss'

const Modal: React.FC<ModalProps> = ({ data, modalState }) => {
  const [isVisible, setIsVisible] = modalState
  const [isLoading, setIsLoading] = useState(false)

  const handleModalHide = useCallback(() => {
    setIsVisible(false)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    setIsLoading(!data)
  }, [data])

  const parsedData = useMemo(() => {
    if (!data) return []
    return Object.entries(data).map(([key, value]) => ({
      key,
      value:
        typeof value === 'object'
          ? Object.values(value).join(', ')
          : String(value),
    }))
  }, [data])

  return (
    <OverlayModal
      show={isVisible}
      onHide={handleModalHide}
      onBackdropClick={handleModalHide}
    >
      <div className="modal" onClick={handleModalHide}>
        <div className="modal-wrapper">
          {isLoading ? (
            <div className="modal-loader">
              <div className="modal-loader-spinner" />
            </div>
          ) : (
            <>
              <div className="modal-header">
                <h2>{`Country: ${data?.name}`}</h2>
              </div>
              <div className="modal-content">
                {parsedData.map(({ key, value }) => (
                  <div className="modal-content-item" key={key}>
                    <h2 className="modal-content-item-label">{`${key}: `}</h2>
                    <h2 className="modal-content-item-value">{value}</h2>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </OverlayModal>
  )
}

export default Modal
