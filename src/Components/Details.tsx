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

  const schema = yup.object().shape({
    nameoncard: yup.string().required(),
    cardnumber: yup.number().positive().required().integer(),
    expm: yup.number().required().positive().min(1).max(12).integer(),
    expy: yup.number().required().positive().min(2023).max(2030).integer(),
    cvv: yup.number().required().positive().min(100).max(999).integer(),
  })

  const { register, handleSubmit } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
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
          <IonList>
            <IonItem>
              <IonLabel position='stacked'>Bank Account Number</IonLabel>
              <IonInput placeholder='account number' />
            </IonItem>
            <IonItem>
              <IonLabel position='stacked'>Aba Number</IonLabel>
              <IonInput placeholder='Enter Aba Number' />
            </IonItem>

            <IonItem>
              <IonLabel position='stacked'>Bank Name</IonLabel>
              <div className='dates'>
                <IonInput placeholder='Enter name of the Bank' />
              </div>
            </IonItem>

            <IonItem>
              <IonLabel position='stacked'>Bank Address</IonLabel>
              <IonInput style={{ width: '50' }} />
            </IonItem>
          </IonList>
          <IonButton expand='full'>Submit</IonButton>
        </IonCardContent>
      )}
    </IonCard>
  )
}
export default Details

//
//   )
// }

// export default Details
