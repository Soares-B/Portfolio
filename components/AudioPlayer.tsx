import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Magnet from "./Bits/Magnet";
import { motion } from "motion/react";

import { TbPlayerSkipBackFilled, TbPlayerSkipForwardFilled  } from "react-icons/tb";
import { FaPause, FaPlay } from "react-icons/fa";

const songs = [
    {
        audio: '/Audio/Lotus Waters.mp3',
        image: '/Imagens/Audio/Lotus Waters.png',
        name: 'Lotus Waters',
        media: 'Yume 2kki',
    },
    {
        audio: '/Audio/Botanical Gardens.mp3',
        image: '/Imagens/Audio/Botanical Gardens.png',
        name: 'Botanical Gardens',
        media: 'Yume 2kki',
    },
    {
        audio: '/Audio/Death Music.mp3',
        image: '/Imagens/Audio/Death Music.png',
        name: 'Death Music',
        media: 'Milk Outside a Bag of Milk Outside a Bag of Milk',
    },
    {
        audio: '/Audio/Sutekimeppou.mp3',
        image: '/Imagens/Audio/Sutekimeppou.png',
        name: 'Sutekimeppou',
        media: 'Bakemonogatari',
    },
    {
        audio: '/Audio/Deep in his heart.mp3',
        image: '/Imagens/Audio/Deep in his heart.png',
        name: 'Deep in his heart',
        media: 'Kubikiri Cycle',
    },
    {
        audio: '/Audio/Dangan Ronpa!.mp3',
        image: '/Imagens/Audio/Dangan Ronpa!.png',
        name: 'Dangan Ronpa!',
        media: 'Danganronpa: Trigger Happy Havoc',
    },
    {
        audio: '/Audio/Pizza & Bowling.mp3',
        image: '/Imagens/Audio/Pizza & Bowling.png',
        name: 'Pizza & Bowling',
        media: 'Silent Hill 2',
    },
]

const fade = {
    Milk: '#499792',
    Dreams: '#5A3A63',
    Vampire: '#FDE0CE',
    Genius: '#57565C',
    Trial: '#EBEBED',
    Silent: '#FEFADB',
    Config: '',
}

const audioName = 'nada'
const media = 'jogo legal'

type Temas = {
    themes: any,
    currentTheme: "Milk" | "Dreams" | "Vampire" | "Genius" | "Trial" | "Silent" | 'Config'
}

export default function AudioPlayer({themes, currentTheme, windowWidth, player, playerContainer}: Temas & {windowWidth : number, player: any, playerContainer: any}){
    const [song, setSong] = useState(0);
    const [pause, setPause] = useState(true);
    const audioRef = useRef<HTMLAudioElement | null>(null);    
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    useEffect(() => {
        const audio = audioRef.current;

        if (!audio) return;

        const checkDuration = () => {
            console.log("Duration:", audio.duration);

            if (Number.isFinite(audio.duration)) {
                setDuration(audio.duration);
            }
        };

        audio.addEventListener("loadedmetadata", checkDuration);
        audio.addEventListener("durationchange", checkDuration);

        audio.load();

        return () => {
            audio.removeEventListener("loadedmetadata", checkDuration);
            audio.removeEventListener("durationchange", checkDuration);
        };
    }, []);

    function randomSong() {
        return Math.floor(Math.random() * songs.length);
    }

    return (
        <div ref={playerContainer} className={`absolute inset-0 z-[99999] w-full h-full flex items-end pointer-events-none ${windowWidth <= 768 ? 'hidden' : ''}`}>
            <div ref={player} className="bg-white/5 rounded-[5px] backdrop-blur-xs border-1 border-white/12 xl:w-1/4 2xl:w-1/5 xl:h-1/6 2xl:h-1/8 relative mb-3 grid grid-rows-4 grid-cols-[0.4fr_0.6fr] xl:grid-cols-[1fr_0.3fr] 2xl:grid-cols-[1fr_0.2fr] items-center 2xl:ml-3 xl:pr-5 2xl:pr-0 pointer-events-auto">
                <div className="w-9/10 h-fit flex flex-col row-span-2 col-1 ml-5">
                    <p className={`${themes[currentTheme].audioPlayer_name} font-montserrat font-semibold text-sm`}>Now playing: {songs[song].name}</p>
                    <p className={`${themes[currentTheme].audioPlayer_media} font-montserrat font-semibold text-sm`}>{songs[song].media}</p>
                </div>
                
                <div className="w-full h-full row-3 col-1 ml-5 pr-5 flex items-center">
                    <svg
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                        className="w-full h-3 cursor-pointer"
                        onClick={(e) => {
                            if (!audioRef.current || !duration) return;

                            const rect = e.currentTarget.getBoundingClientRect();
                            const percentage = Math.max(
                                0,
                                Math.min(1, (e.clientX - rect.left) / rect.width)
                            );

                            audioRef.current.currentTime = percentage * duration;
                        }}
                    >
                        {/* Linha de fundo */}
                        <path
                            d="M 0 5 H 100"
                            stroke={fade[currentTheme]}
                            strokeWidth="3"
                            fill="none"
                        />

                        {/* Linha de progresso */}
                        <path
                            d={`M 0 5 H ${duration > 0
                                ? (currentTime / duration) * 100
                                : 0}`}
                            stroke="white"
                            strokeWidth="3"
                            fill="none"
                        />
                    </svg>
                </div>

                <audio
                    ref={audioRef}
                    src={songs[song].audio}
                    preload="auto"
                    loop
                    onTimeUpdate={() => {
                        if (audioRef.current) {
                            setCurrentTime(audioRef.current.currentTime);
                        }
                    }}
                    onDurationChange={() => {
                        if (audioRef.current) {
                            setDuration(audioRef.current.duration);
                        }
                    }}
                    onEnded={() => setPause(true)}
                />

                <div className="w-full h-full row-4 col-1 ml-5 pr-5">
                    <div className="w-full h-full flex items-center justify-center gap-10">
                        <Magnet padding={100} magnetStrength={2.5}>
                            <motion.button className="w-fit h-full hover:cursor-pointer outline-none"
                            whileTap={{scale: 0.8}}
                            onClick={() => {
                                if (song === 0){
                                    setSong(songs.length - 1)
                                }else{
                                    setSong(song - 1)
                                }
                                setPause(true)
                            }}>
                                <TbPlayerSkipBackFilled  className="text-white size-6"/>
                            </motion.button>
                        </Magnet>
                        <Magnet padding={100} magnetStrength={2.5}>
                            <motion.button
                                className="w-fit h-full hover:cursor-pointer outline-none"
                                whileTap={{ scale: 0.8 }}
                                onClick={async () => {
                                    if (!audioRef.current) return;

                                    if (pause) {
                                        await audioRef.current.play();
                                        setPause(false);
                                    } else {
                                        audioRef.current.pause();
                                        setPause(true);
                                    }
                                }}
                            >
                                {pause
                                    ? <FaPlay className="text-white size-5" />
                                    : <FaPause className="text-white size-5" />
                                }
                            </motion.button>
                        </Magnet>
                        <Magnet padding={100} magnetStrength={2.5}>
                            <motion.button className="w-fit h-full hover:cursor-pointer outline-none"
                            whileTap={{scale: 0.8}}
                            onClick={() => {
                                if (song === songs.length - 1){
                                    setSong(0)
                                }else{
                                    setSong(song + 1)
                                }
                                setPause(true)
                            }}>
                                <TbPlayerSkipForwardFilled  className="text-white size-6"/>
                            </motion.button>
                        </Magnet>
                    </div>
                </div>

                <div className="w-full h-full flex items-center justify-center row-span-2 col-2 select-none">
                    <Image
                        src={songs[song].image}
                        width={640}
                        height={640}
                        alt={'aaa'}
                        className="w-4/5 h-4/5 rounded-[5px]"
                    >
                    </Image>
                </div>

            </div>
        </div>
    );
}