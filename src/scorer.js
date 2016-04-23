export default {
  territoryResultFor: function(game) {
    const blackDeadAsCaptures = game._deadPoints.filter(function(deadPoint) { return game.intersectionAt(deadPoint.y, deadPoint.x).isBlack(); });
    const whiteDeadAsCaptures = game._deadPoints.filter(function(deadPoint) { return game.intersectionAt(deadPoint.y, deadPoint.x).isWhite(); });

    return {
      black: game.territory().black.length + game.currentMove().whiteStonesCaptured + whiteDeadAsCaptures.length,
      white: game.territory().white.length + game.currentMove().blackStonesCaptured + blackDeadAsCaptures.length
    };
  },

  areaResultFor: function(game) {
    const blackStonesOnTheBoard = game.intersections().filter(function(intersection) { return intersection.isBlack() && !game.isDeadAt(intersection.y, intersection.x); });
    const whiteStonesOnTheBoard = game.intersections().filter(function(intersection) { return intersection.isWhite() && !game.isDeadAt(intersection.y, intersection.x); });

    return {
      black: game.territory().black.length + blackStonesOnTheBoard.length,
      white: game.territory().white.length + whiteStonesOnTheBoard.length
    };
  }
};
