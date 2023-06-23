import React from "react"
import { Card, CardGroup, CardImg, CardBody, CardTitle, Button, NavLink } from "reactstrap"

// declare functional component
const GameProtectedIndex = ({currentUser, games}) => {
  
  const myGames = games?.filter(game => currentUser?.id === game.user_id)

  return(
    <>
      <CardGroup>
        {myGames?.map((game, index) => {
          return(
            <Card key={index}>
              <CardImg
                alt="game card image"
                src={game.image}
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Located in {game.state}
                </CardTitle>
                <Button>
                  <NavLink href={`/gameshow/${game.id}`}>
                    More Details
                  </NavLink>
                </Button>
                <Button>
                  Edit
                </Button>
                <Button>
                  Delete
                </Button>
              </CardBody>
            </Card>
          )
        })}
      </CardGroup>
    </>
  )
}
// export
export default GameProtectedIndex