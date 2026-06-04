// inside @/components/custom/WorkspaceBody

import React from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
// Make sure 'default' is present here!
export default function WorkspaceBody({ userDetail }: { userDetail?: { credits: number } }) {
  return (
    <div>
              <div className='flex justify-between items-center'>
                <h2 className='text-4xl font-medium'>Workspace</h2>
                <h2 className='text-blue-800 bg-blue-100 px-2 rounded-lg'>Remaining Credits: {userDetail?.credits}</h2>
            </div>
                
                
                 <Card className={'mt-5 flex justify-between items-center p-4 border rounded-lg'}>
                <div className='flex items-center gap-5'>
                    <Image src={'/github.png'} alt='github' width={40} height={40} />
                    <h2 className='text-lg' >Connect Github & Add Repository</h2>
                </div>
                <div>

                   
                </div>
            </Card>
    </div>
  )
}