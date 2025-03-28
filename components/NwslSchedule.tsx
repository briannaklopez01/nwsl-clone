import React, {useEffect, useState} from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, StyleSheet,View} from 'react-native';
import moment from 'moment';

export default function getSoccerData() {
    type soccerGame = {
        game_id: string;
        home_team_id: string;
        away_team_id: string;
        date_time_utc: Date;
        home_score: string,
        away_score: string,

    }
    type teamData = {
        team_id: string,
        team_name: string,
        team_short_name: string,
        team_abbreviation: string
    }
   
    const [isLoading, setLoading] = useState(true);
    const [gameData, setGameData] = useState<soccerGame[]>([]);
    const [teamsData, setTeamData] = useState<teamData[]>([]);

    const getData = async () =>{
        try {
            const teamResponse = await fetch('https://app.americansocceranalysis.com/api/v1/nwsl/teams');
            const teamJson = await teamResponse.json();
            setTeamData(teamJson);

            const gameResponse = await fetch('https://app.americansocceranalysis.com/api/v1/nwsl/games?season_name=2025');
            const gameJson = await gameResponse.json();
            setGameData(gameJson);

        } catch(error){
            throw (error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const Match = (game: soccerGame) =>(
        <View style={styles.dataContainer}>
            <Text style={styles.gameText}>
                {moment(game.date_time_utc).format('MM-DD')}
            </Text>
            <View style={styles.gameInfo}>
                <Text style={styles.gameText}>
                    {teamsData.find(team=> team.team_id===game.home_team_id)?.team_name} vs. {teamsData.find(team=> team.team_id===game.away_team_id)?.team_name}
                </Text>
                <Text style={styles.gameText}>
                    {game.home_score} - {game.away_score}
                </Text>
            </View>
            
            

        </View>
    )

    return (
        <View style={styles.container}> 
            {isLoading? (
                <ActivityIndicator/>
            ):(
                <FlatList
                style = {styles.listContainer}
                data={gameData}
                keyExtractor={({game_id}) => game_id}
                renderItem={({item})=> (
                    <Match {...item}/>
                )}
                />
            )} 
        </View>
    );

}

const styles = StyleSheet.create({
    listContainer: {
      padding: 10
    },
    dataContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: 600,
        shadowRadius: 5,
        shadowOpacity: 5,
        shadowColor: 'grey'
    },
    container: {
        alignItems: 'center'
    },
    gameInfo: {
        alignItems:'center',
    },
    gameText: {
        fontFamily:'Monospace',
        fontSize: 20,
        color: '#002D72'
    }
  });