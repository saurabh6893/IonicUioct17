import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonSegment,
  IonSegmentButton,
  IonButton,
} from '@ionic/react'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import * as yup from 'yup'
function Details() {
  const [seg, setSeg] = useState<boolean>(true)
  const [all, setAll] = useState<any>(null)

  const schema = yup.object().shape({
    nameoncard: yup.string(),
    cardnumber: yup.number().positive().integer(),
    expm: yup.number().positive().min(1).max(12).integer(),
    expy: yup.number().positive().min(2023).max(2030).integer(),
    cvv: yup.number().positive().min(100).max(999).integer(),
    accnumber: yup.number().positive(),
    abanumber: yup.number().positive().integer().min(1500).max(4000),
    bankname: yup.string(),
    bankaddress: yup.string(),
  })

  const { register, handleSubmit } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    setAll(data)
  }

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Add Payment Method</IonCardTitle>

          <IonSegment value='default'>
            <IonSegmentButton value='default' onClick={() => setSeg(true)}>
              <IonLabel>Credit/Debit</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='segment' onClick={() => setSeg(false)}>
              <IonLabel>add Bank Account</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCardHeader>
        {seg ? (
          <IonCardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonList>
                <IonItem>
                  <IonLabel position='stacked'>Name on Card</IonLabel>
                  <IonInput
                    placeholder='Enter name on Card'
                    type='text'
                    {...register('nameoncard')}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position='stacked'>Card Number</IonLabel>
                  <IonInput
                    placeholder='Enter Card Number'
                    {...register('cardnumber')}
                    type='number'
                  />
                </IonItem>

                <IonItem>
                  <IonLabel position='stacked'>Expiration date</IonLabel>
                  <div className='dates'>
                    <IonInput placeholder='month' {...register('expm')} />
                    <IonInput placeholder='year' {...register('expy')} />
                  </div>
                </IonItem>

                <IonItem>
                  <IonLabel position='stacked'>Cvv Number</IonLabel>
                  <IonInput style={{ width: '50' }} {...register('cvv')} />
                </IonItem>
              </IonList>

              <IonButton expand='full' type='submit'>
                Submit
              </IonButton>
            </form>
          </IonCardContent>
        ) : (
          <IonCardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <IonList>
                <IonItem>
                  <IonLabel position='stacked'>Bank Account Number</IonLabel>
                  <IonInput
                    placeholder='account number'
                    {...register('accnumber')}
                  />
                </IonItem>
                <IonItem>
                  <IonLabel position='stacked'>Aba Number</IonLabel>
                  <IonInput
                    placeholder='Enter Aba Number'
                    {...register('abanumber')}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel position='stacked'>Bank Name</IonLabel>
                  <IonInput
                    placeholder='Enter name of the Bank'
                    {...register('bankname')}
                  />
                </IonItem>

                <IonItem>
                  <IonLabel position='stacked'>Bank Address</IonLabel>
                  <IonInput
                    style={{ width: '50' }}
                    {...register('bankaddress')}
                  />
                </IonItem>
              </IonList>

              <IonButton expand='full' type='submit'>
                Submit
              </IonButton>
            </form>
          </IonCardContent>
        )}
      </IonCard>
    </>
  )
}
export default Details

//
//   )
// }

// export default Details
