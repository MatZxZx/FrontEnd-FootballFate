import './PStats.css'


/*<div class='container'>
                <img src='src\assets\shirt.png' alt='t-shirt' class='object-cover'></img>
                <strong class="PlayerName">Pietro</strong>
                <div class='stats'>
                    <p class='defender'>DF</p>
                    <p class='points'>17Pts</p>
                </div>
</div> */

function position_color(position){
    switch(position){
    case 'DF':
        return 'text-[#58C6CD]'
    case 'DEL':
        return 'text-[#C71919]'
    case 'MC':
        return 'text-[#E3E816]'
    case 'PT':
        return 'text-[#CC40E2]'
    }
}


function PlayerStats({playerName, position, points}){


    return(
        <div class='text-white'>
            <div className='p-4 flex w-[200px]'>
                <div>
                    <img src="src\assets\shirt.png" alt="" />
                </div>
                <div className='w-1/3 flex flex-col mx-auto items-center justify-center'>
                    <p className='block text-center text-lg font-poppins font-bold'>
                        
                        {playerName}

                    </p>
                    <div className='flex items-center gap-6'>
                        <p className={'text-base font-bold  ' + position_color(position)}>

                            {position}

                        </p>
                        <p className='text-xs font-bold text-[#58C6CD]'>
                            
                            {points + 'Pts'}
                            
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*<PlayerStats playerName='Pietro' position='DF' points='50'></PlayerStats>*/


export default function StatsGrid(){
      
    return(
        <div><h3 class='text-white text-center'>
        Mejores puntajes de la anterior jornada
        </h3>
        
    <div class="parent bg-[#202020] rounded-lg">
        
        <div class="div1">
        
        <PlayerStats playerName='Tiziano' position='MC' points='101'></PlayerStats>
        
        </div>

        <div class="div2">

        <PlayerStats playerName='Matias' position='DF' points='-1'></PlayerStats>

        </div>


        <div class="div3">

        <PlayerStats playerName='Chaparro' position='DEL' points='100'></PlayerStats>

        </div>

        <div class="div4">

        <PlayerStats playerName='Moschen' position='PT' points='999'></PlayerStats>

        </div>
    </div>
    </div>
    )
    
}